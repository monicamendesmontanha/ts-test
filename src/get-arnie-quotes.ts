import { httpGet } from "./mock-http-interface";

type TResult = {
  [key: string]: string;
};

type TIndexedArnieQuote = {
  index: number;
  result: TResult;
};

const fetchArnieQuote = async (
  url: string,
  index: number
): Promise<TIndexedArnieQuote> => {
  const response = await httpGet(url);
  const jsonResponse = JSON.parse(response.body);
  const message = jsonResponse.message;

  if (response.status === 200) {
    return { index, result: { "Arnie Quote": message } };
  }
  return { index, result: { FAILURE: message } };
};

export const getArnieQuotes = async (urls: string[]): Promise<TResult[]> => {
  const pendingIndexedRequests: Promise<TIndexedArnieQuote>[] = urls.map(
    (url: string, index: number) => {
      return fetchArnieQuote(url, index);
    }
  );

  const arnieQuotesResults: TIndexedArnieQuote[] = await Promise.all(
    pendingIndexedRequests
  );

  const results: TResult[] = arnieQuotesResults
    .sort((a: TIndexedArnieQuote, b: TIndexedArnieQuote) => a.index - b.index)
    .map((quote: TIndexedArnieQuote): TResult => {
      return quote.result;
    });

  return results;
};
