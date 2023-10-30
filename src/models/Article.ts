import { formatDateToCustomString } from '../utils';

export default class Article {
  id: number;
  title: string;
  content: string;
  date: Date;
  formattedDates: { full: string; short: string };

  constructor({ id, title, content, date }: Article) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.date = new Date(date);
    this.formattedDates = {
      full: formatDateToCustomString(this.date),
      short: formatDateToCustomString(this.date, {
        short: true,
      }),
    };
  }
}
