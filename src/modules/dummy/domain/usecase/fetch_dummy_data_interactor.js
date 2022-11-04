import dummy_repo from "../../data/repo/dummy_repo"
import UserEntity from "../entity/user_entity";

let fetchDummyData = async () => {
  let data = await dummy_repo.fetchDummyData();
  return [...(data.map(e => new UserEntity(e.id, e.name, e.email, e.avatar)))]
}

export default {
  execute: fetchDummyData
}