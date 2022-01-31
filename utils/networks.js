export const fetcher = (...args) =>
    fetch(...args)
        .then((res) => {
            if (res.status === 200) {
                return res;
            } else {
                throw res;
            }
        })
        .then((res) => res.json());
