
export const revalidate = 3600 * 4 // revalidate the data at most every 4 hour

export const projects = [
  "Telegram-Leecher",
  "Python-Passwd",
  "wifi-rc-bot",
  "CryptoLocker",
  "Pentesting-Notes",
  "next-portfolio",
];

export const fetchMeta = async (project: string) => {
  
  const link = "https://api.github.com/repos/XronTrix10/" + project;

  const response = await fetch(link);

  try {
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error fetching data:", response.statusText);
    }
  } catch (err) {
    console.error("Error:", err);
  }
};

const fetchRepoMeta = async () => {
  const repoData = [];

  for (const project of projects) {
    const data = await fetchMeta(project);
    repoData.push(data);
  }

  return repoData;
};

export default fetchRepoMeta;
