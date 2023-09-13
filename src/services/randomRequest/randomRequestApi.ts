import ApiService from '../../utils/network';

const randomRequestApi = {
  getRandomRequest(): Promise<any> {
    const apiKey = process.env.NEXT_PUBLIC_GIPHY;
    return ApiService.get(`/random?api_key=${apiKey}`);
  },
};

export default randomRequestApi;
