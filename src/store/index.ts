import { createStore } from "vuex";
import _ from "lodash";
import { checkObjectExistsInArray } from "@/utils/tools";

export default createStore({
  state: {
    tabs: [{ title: "MainView", name: "/admin/index" }],
    currentTab: "/admin/index",
  },
  getters: {
    tabs(state) {
      return state.tabs;
    },
    currentTab(state) {
      return state.currentTab;
    },
  },
  mutations: {
    /**
     *  更新vuex数据
     * @param state
     * @param update
     */
    UPDATE_MUTATIONS(state: AnyObject, update) {
      Object.keys(update).forEach((item: string) => {
        state[item] = update[item];
      });
    },
  },
  actions: {
    /**
     * 添加tabs
     * @param commit
     * @param state
     * @param payload
     */
    addTabs({ commit, state }, payload) {
      try {
        const newTabs = _.cloneDeep(state.tabs);
        if (checkObjectExistsInArray(payload, newTabs) === -1) {
          newTabs.push(payload);
        }
        commit("UPDATE_MUTATIONS", { tabs: newTabs, currentTab: payload.name });
      } catch (error) {
        commit("UPDATE_MUTATIONS", { error: error });
      }
    },
    /**
     * 删除tabs
     * @param commit
     * @param state
     * @param payload
     */
    deleteTabs({ commit, state }, payload) {
      try {
        const newTabs = _.cloneDeep(state.tabs);
        const index = newTabs.findIndex(
          (item: { name: string }) => item.name === payload
        );
        newTabs.splice(index, 1);
        const nextTab = newTabs[index + 1] || newTabs[index - 1];
        commit("UPDATE_MUTATIONS", {
          tabs: newTabs,
          currentTab: nextTab.name,
        });
      } catch (error) {
        commit("UPDATE_MUTATIONS", { error: error });
      }
    },
  },
  modules: {},
});
