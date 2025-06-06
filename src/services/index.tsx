export const getData = async (url: string) => {
  const res = await fetch(url, {
    cache: "no-store",
    next: {
      revalidate: 10,
    },
  });
  // console.log(cache);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
