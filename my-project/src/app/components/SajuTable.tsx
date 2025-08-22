import React from 'react';
import clsx from 'clsx';

export type TextCellData = { type: 'text'; main: string; sub?: string };

/** 색상이 있는 블록 셀 데이터 타입 */
export type BlockCellData = {
  type: 'block';
  top: string;
  main: string;
  bottom: string;
  color: 'black' | 'red' | 'teal' | 'white';
};

/** 여러 셀을 담을 수 있는 새로운 Composite 셀 타입 */
export type CompositeCellData = { type: 'composite'; items: CellData[] };

/** 모든 셀 데이터 타입을 포함하는 Union 타입 */
export type CellData = TextCellData | BlockCellData | CompositeCellData;

/** 테이블의 한 행(Row)을 정의합니다. */
export type SajuRow = {
  category: { main: string; sub: string };
  [key: string]: CellData | { main: string; sub: string }; // category 외에 동적 필드 허용
};

/** 테이블의 한 열(Column)을 정의합니다. */
export type ColumnDef = {
  headerName: string;
  field: string;
};

/** SajuTable 컴포넌트가 받을 전체 Props 타입 */
export type SajuTableProps = {
  name: string;
  birthDate: string;
  columnDefs: ColumnDef[];
  rowData: SajuRow[];
};

// --- 2. 재사용을 위한 내부 셀 컴포넌트들 ---

const RowHeaderCell = ({ main, sub }: { main: string; sub: string }) => (
  <div className="flex h-full flex-col items-center justify-center  p-1 text-center">
    <span className="text-lg font-semibold text-stone-700">{main}</span>
    <span className="text-xs text-stone-500">{sub}</span>
  </div>
);

const TextCell = ({ data }: { data: TextCellData }) => (
  <div className="flex flex-col items-center justify-center p-2 text-center text-lg font-medium">
    <span>{data.main}</span>
    {data.sub && <span className="text-xs text-stone-500">{data.sub}</span>}
  </div>
);

const BlockCell = ({ data }: { data: BlockCellData }) => {
  const colorClasses = {
    black: 'bg-gray-800 text-white',
    red: 'bg-red-700 text-white',
    teal: 'bg-teal-600 text-white',
    white: 'bg-white text-black border-2 border-gray-300',
  };
  return (
    // self-stretch를 추가하여 부모 flex 컨테이너의 높이를 꽉 채우도록 합니다.
    <div className="flex h-full min-h-24 w-full items-center justify-center p-2 self-stretch">
      <div
        className={clsx(
          'relative flex h-full w-full flex-col items-center justify-center rounded-lg shadow-sm',
          colorClasses[data.color],
        )}
      >
        <span className="absolute top-1 text-xs opacity-80">{data.top}</span>
        <span className="text-4xl font-semibold">{data.main}</span>
        <span className="absolute bottom-1 text-xs opacity-80">{data.bottom}</span>
      </div>
    </div>
  );
};

const DynamicCell = ({ data }: { data: CellData }) => {
  switch (data.type) {
    case 'text':
      return <TextCell data={data} />;
    case 'block':
      return <BlockCell data={data} />;
    case 'composite':
      return (
        <div className="flex flex-col items-center justify-center space-y-1 p-2">
          {data.items.map((item, index) => (
            <DynamicCell key={index} data={item} />
          ))}
        </div>
      );
    default:
      return null;
  }
};

// --- 3. 메인 SajuTable 컴포넌트 ---
export const SajuTable = ({ name, birthDate, columnDefs, rowData }: SajuTableProps) => {
  return (
    // 테두리 색상을 border-gray-900 (검정 계열)으로 변경
    <div className="w-full max-w-md rounded-lg border-2 border-black font-sans shadow-lg">
      {/* 헤더 섹션 (상단 테두리 색상도 동일하게 변경) */}
      <div className="border-b-2 border-black p-4 text-center">
        <p className="text-lg font-semibold text-stone-800">{name}님의 사주</p>
        <p className="text-2xl font-bold tracking-wider text-stone-900">{birthDate}</p>
      </div>

      {/* 바디 섹션 (Grid Layout) */}
      <div
        className="grid grid-cols-[auto_1fr_1fr_1fr_1fr] text-stone-800"
        style={{ gridTemplateColumns: 'minmax(80px, 1fr) repeat(4, minmax(0, 2fr))' }}
      >
        {/* 컬럼 헤더 */}
        <div /> {/* 좌측 상단 빈 셀 */}
        {columnDefs.map(col => (
          <div
            key={col.field}
            className="border-b border-l border-stone-300 py-2 text-center text-2xl font-bold"
          >
            {col.headerName}
          </div>
        ))}
        {/* 행 데이터 */}
        {rowData.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {/* 행 헤더 (카테고리) */}
            {/* flex와 items-center를 추가하여 세로 중앙 정렬을 적용합니다. */}
            <div className="border-b border-stone-300 flex items-center justify-center">
              <RowHeaderCell main={row.category.main} sub={row.category.sub} />
            </div>
            {/* 행의 각 셀들 */}
            {columnDefs.map(col => (
              // flex와 items-center를 추가하여 세로 중앙 정렬을 적용합니다.
              <div
                key={col.field}
                className="border-b border-l border-stone-300 flex items-center justify-center"
              >
                <DynamicCell data={row[col.field] as CellData} />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
