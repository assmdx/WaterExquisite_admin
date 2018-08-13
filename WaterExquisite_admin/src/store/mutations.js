const INITIALIZE_DATA = 'INITIALIZE_DATA';
const GOTO_ADDGOOD = 'GOTO_ADDGOOD';
const GOTO_GOOD = 'GOTO_GOOD';
export default {
  /*
	初始化信息，
	 */
	[INITIALIZE_DATA](state) {

	},
	/*状态转变为添加商品
	*/
	[GOTO_ADDGOOD](state){
		state.title = 'addGood'
	},

  /*状态转变为添加商品
    */
  [GOTO_GOOD](state){
    state.title = 'good'
  }
}
