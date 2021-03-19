export default function clearText(text: string): string {
  return text.replace(/<\/?[^>]+(>|$)/g, '');
}
