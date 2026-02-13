export const DELAYS = {
  pageLoad: 2000,
  imageLoad: 1500,
  sliderDelay: 3000,
  contentRender: 800,
  navigation: 1000,
};

export async function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
