import ApiService from '../../utils/network';

const searchRequestApi = {
  getSearchRequest(q: string): Promise<any> {
    const apiKey = process.env.NEXT_PUBLIC_GIPHY;
    const url = `/search?api_key=${apiKey}&limit=18`;
    return ApiService.get(url, {
      params: {
        q,
      },
    });
  },
};

export default searchRequestApi;
