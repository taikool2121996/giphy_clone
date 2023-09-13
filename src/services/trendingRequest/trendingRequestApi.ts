import ApiService from '../../utils/network';

const trendingRequestApi = {
  getTrendingRequest(): Promise<any> {
    const apiKey = process.env.NEXT_PUBLIC_GIPHY;
    return ApiService.get(`/trending?api_key=${apiKey}&limit=30`);
  },
};

export default trendingRequestApi;
