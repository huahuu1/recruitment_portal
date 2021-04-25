import { SERVER_API_URL } from '@/constants';

export function loadImage(name) {
  return SERVER_API_URL + 'api/common/get-image?name=' + encodeURIComponent(name);
}
