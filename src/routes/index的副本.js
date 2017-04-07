import Finds from 'src/controllers/finds/Finds'

import Orders from 'src/controllers/orders/Orders'

import Sells from 'src/controllers/sells/Sells'

import Mines from 'src/controllers/mines/Mines'
import MinesInfo from 'src/controllers/mines/info/MinesInfo'
import MinesRing from 'src/controllers/mines/ring/MinesRing'

export default {
	//发现-模块Routes
	'/finds': Finds,

	//订单-模块Routes
	'/orders': Orders,

	//商品-模块Routes
	'/sells': Sells,

	//我的-模块Routes
	'/mines': Mines,
	'/mines/info': MinesInfo,
	'/mines/ring': MinesRing
}
