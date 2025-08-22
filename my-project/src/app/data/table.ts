import { ColumnDef, SajuRow } from '../components/SajuTable';

// 컬럼 정의
export const columnDefs: ColumnDef[] = [
  { headerName: '時', field: 'hour' },
  { headerName: '日', field: 'day' },
  { headerName: '月', field: 'month' },
  { headerName: '年', field: 'year' },
];

export const rowData: SajuRow[] = [
  {
    category: { main: '十星', sub: '(십성)' },
    hour: { type: 'text', main: '傷官', sub: '(상관)' },
    day: { type: 'text', main: '比肩', sub: '(비견)' },
    month: { type: 'text', main: '傷官', sub: '(상관)' },
    year: { type: 'text', main: '傷官', sub: '(상관)' },
  },
  {
    category: { main: '天干', sub: '(천간)' },
    hour: { type: 'block', top: '임', main: '壬', bottom: '陽水', color: 'black' },
    day: { type: 'block', top: '정', main: '丁', bottom: '陰火', color: 'red' },
    month: { type: 'block', top: '계', main: '癸', bottom: '陰水', color: 'black' },
    year: { type: 'block', top: '계', main: '癸', bottom: '陰水', color: 'black' },
  },
  {
    category: { main: '地支', sub: '(지지)' },
    hour: { type: 'block', top: '인', main: '寅', bottom: '陽木', color: 'teal' },
    day: { type: 'block', top: '사', main: '巳', bottom: '陰火', color: 'red' },
    month: { type: 'block', top: '해', main: '亥', bottom: '陰水', color: 'black' },
    year: { type: 'block', top: '유', main: '酉', bottom: '陰金', color: 'white' },
  },
  {
    category: { main: '十星', sub: '(십성)' },
    hour: { type: 'text', main: '比肩', sub: '(비견)' },
    day: { type: 'text', main: '劫財', sub: '(겁재)' },
    month: { type: 'text', main: '食神', sub: '(식신)' },
    year: { type: 'text', main: '偏財', sub: '(편재)' },
  },
  {
    category: { main: '十二運星', sub: '(십이운성)' },
    hour: { type: 'text', main: '死', sub: '(사)' },
    day: { type: 'text', main: '帝旺', sub: '(제왕)' },
    month: { type: 'text', main: '胎', sub: '(태)' },
    year: { type: 'text', main: '長生', sub: '(장생)' },
  },
  {
    category: { main: '十二神殺', sub: '(십이신살)' },
    hour: { type: 'text', main: '劫殺', sub: '(겁살)' },
    day: { type: 'text', main: '地殺', sub: '(지살)' },
    month: { type: 'text', main: '驛馬殺', sub: '(역마살)' },
    year: { type: 'text', main: '將星殺', sub: '(장성살)' },
  },
  {
    category: { main: '貴人', sub: '(귀인)' },
    hour: { type: 'text', main: '(없음)' },
    day: { type: 'text', main: '(없음)' },
    month: {
      type: 'composite',
      items: [{ type: 'text', main: '天乙', sub: '(천을귀인)' }],
    },
    year: {
      type: 'composite',
      items: [
        { type: 'text', main: '天乙', sub: '(천을귀인)' },
        { type: 'text', main: '太極', sub: '(태극귀인)' },
        { type: 'text', main: '文昌', sub: '(문창귀인)' },
      ],
    },
  },
];
