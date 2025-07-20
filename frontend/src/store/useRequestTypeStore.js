import { create } from 'zustand';

export const useRequestTypeStore = create(set => ({
  selectedMode: 'clipboard',
  // chosenDevice: null,
  // isRequesting: false,
  // thumbnailUri: undefined,
  // placedStickers: [],
  setSelectedMode: mode => set({ selectedMode: mode }),

  // getLatestPhoto: async () => {
  //   try {
  //     const photos = await CameraRoll.getPhotos({
  //       first: 1,
  //       assetType: 'Photos',
  //       groupTypes: 'All',
  //     });
  //     const uri = photos.edges[0]?.node?.image?.uri;
  //     if (uri) {
  //       set({ thumbnailUri: uri });
  //     }
  //   } catch (err) {
  //     console.error(`읽기 권한이 존재하지 않습니다(세부 에러사항:${err})`);
  //   }
  // },
}));
