import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { IAction } from "pages/Home/Home";
import getIssues from "api/getIssues";

export default function useInfinityQuery<T extends Partial<IOptions>, K extends IAction>(
  url: string,
  action: K,
  options: T,
  fetchPrevAction?: () => void,
  fetchNextAction?: () => void
) {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(options.page ?? 1);
  const [data, setData] = useState<AxiosResponse | null>(null);

  const newOptions = { ...options, page };

  useEffect(() => {
    (async () => {
      if (fetchPrevAction) fetchPrevAction();
      const data = await getIssues<T>(url, newOptions);
      setData(data);
      dispatch(action(data?.data));
      if (fetchNextAction) fetchNextAction();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, url]);

  return { data, page, setPage };
}
