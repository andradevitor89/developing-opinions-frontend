export default interface IArticle {
  id: number;
  title: string;
  content: string;
  date: Date;
  formattedDates: { full: string; short: string };
}
