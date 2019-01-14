import { ADD_FLOWER, UPDATE_FLOWER,REMOVE_FLOWER,LIST_FLOWERS } from "./Constants";

const flowerActions = {
  addFlower(payload) {
    return { type: ADD_FLOWER, payload };
  },
  listFlowers() {
    return { type: LIST_FLOWERS };
  },
  updateFlower(payload) {
    return { type: UPDATE_FLOWER, payload };
  },
  removeFlower(payload) {
    return { type: REMOVE_FLOWER, payload };
  }
}

export default flowerActions