import { formatDistanceToNow } from 'date-fns';

export default function formatDate(date: string) {
  const formattedDate = formatDistanceToNow(
    new Date(date),
    { addSuffix: true }
  );

  return formattedDate;
};
