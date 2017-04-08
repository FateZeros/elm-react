import React, { Component } from 'react'

import ReactSwipe from 'react-swipe'

import styles from './SellsView.scss'
import Footer from 'src/components/footer'

//临时图片
import kindImg1 from 'src/asserts/temp/elm-kind-1-60.png'
import kindImg2 from 'src/asserts/temp/elm-kind-2-60.png'
import kindImg3 from 'src/asserts/temp/elm-kind-3-60.png'
import kindImg4 from 'src/asserts/temp/elm-kind-4-60.png'
import kindImg5 from 'src/asserts/temp/elm-kind-5-60.png'
import kindImg6 from 'src/asserts/temp/elm-kind-6-60.png'
import kindImg7 from 'src/asserts/temp/elm-kind-7-60.png'
import adsImg1 from 'src/asserts/temp/ads-1.png'

import food1 from 'src/asserts/temp/elm-food-1-80.png'

class SellsView extends Component {

	render() {
		const sellsKindsOptions = {
			continuous: true
		}

		const adsOptions = {
			continuous: true,
			auto: 3000,
			speed: 400
		}

		return (
			<div className={styles.root}>
				<div className={styles.searchCont}>
				</div>

				<ReactSwipe className={styles.sellsKindsCont} swipeOptions={sellsKindsOptions}>
	          <div className={styles.sellKindsPage}>
	          	<div className={styles.sellKindsItem}>
	          		<div className={styles.kinds}>
	          			<img src={kindImg1}/>
	          			<p>美食</p>
	          			<div className={styles.kindTag}>hot</div>
	          		</div>
	          		<div className={styles.kinds}>
	          			<img src={kindImg2}/>
	          			<p>甜品饮品</p>
	          		</div>
	          		<div className={styles.kinds}>
	          			<img src={kindImg3}/>
	          			<p>商店超市</p>
	          		</div>
	          		<div className={styles.kinds}>
	          			<img src={kindImg4}/>
	          			<p>预定早餐</p>
	          		</div>
	          	</div>
	          	<div className={styles.sellKindsItem}>
	          		<div className={styles.kinds}>
	          			<img src={kindImg5}/>
	          			<p>果蔬生鲜</p>
	          		</div>
	          		<div className={styles.kinds}>
	          			<img src={kindImg6}/>
	          			<p>新店特惠</p>
	          		</div>
	          		<div className={styles.kinds}>
	          			<img src={kindImg7}/>
	          			<p>准时达</p>
	          		</div>
	          		<div className={styles.kinds}>
	          			<img src={kindImg2}/>
	          			<p>下午茶</p>
	          		</div>
	          	</div>
	          </div>
	          <div className={styles.sellKindsPage}>
	          	<div className={styles.sellKindsItem}>
	          		<div className={styles.kinds}>
	          			<img src={kindImg1}/>
	          			<p>土豪推荐</p>
	          			<div className={styles.kindTag}>0元</div>
	          		</div>
	          		<div className={styles.kinds}>
	          			<img src={kindImg2}/>
	          			<p>鲜花蛋糕</p>
	          		</div>
	          		<div className={styles.kinds}>
	          			<img src={kindImg3}/>
	          			<p>汉堡</p>
	          		</div>
	          		<div className={styles.kinds}>
	          			<img src={kindImg5}/>
	          			<p>日韩料理</p>
	          		</div>
	          	</div>
	          	<div className={styles.sellKindsItem}>
	          		<div className={styles.kinds}>
	          			<img src={kindImg4}/>
	          			<p>麻辣烫</p>
	          		</div>
	          		<div className={styles.kinds}>
	          			<img src={kindImg6}/>
	          			<p>披萨拉面</p>
	          		</div>
	          		<div className={styles.kinds}>
	          			<img src={kindImg7}/>
	          			<p>川湘菜</p>
	          		</div>
	          		<div className={styles.kinds}>
	          			<img src={kindImg2}/>
	          			<p>包子粥店</p>
	          		</div>
	          	</div>
	          </div>
	      </ReactSwipe>

	      <ReactSwipe className={styles.adsCont} swipeOptions={adsOptions}>
	      	<div className={styles.adsPage}>
	      		<img src={adsImg1} />
	      	</div>
	      	<div className={styles.adsPage}>
	      		<img src={adsImg1} />
	      	</div>
	      	<div className={styles.adsPage}>
	      		<img src={adsImg1} />
	      	</div>
	      	<div className={styles.adsPage}>
	      		<img src={adsImg1} />
	      	</div>
	      </ReactSwipe>
	      
	      <div className={styles.sellsIntro}>
	      	<div className={styles.sellsIntroRow}>
	      		<div className={styles.sellsIntroItem}>
	      			<div className={styles.sellsIntroFont}>
	      				<p>不止5折</p>
	      				<p>周五半价日</p>
	      			</div>
	      			<div className={styles.sellsIntroImg}>
	      				<img src={food1} />
	      				<div className={styles.sellsIntroTag}>半价日</div>
	      			</div>
	      		</div>
	      		<div className={styles.sellsIntroItem}>
	      			<div className={styles.sellsIntroFont}>
	      				<p>霸王餐</p>
	      				<p>领取20元红包</p>
	      			</div>
	      			<div className={styles.sellsIntroImg}>
	      				<img src={food1} />
	      			</div>
	      		</div>
	      	</div>
	      	<div className={styles.sellsIntroRow}>
	      		<div className={styles.sellsIntroItem}>
	      			<div className={styles.sellsIntroFont}>
	      				<p>营养快餐</p>
	      				<p>15元吃饱</p>
	      			</div>
	      			<div className={styles.sellsIntroImg}>
	      				<img src={food1} />
	      			</div>
	      		</div>
	      		<div className={styles.sellsIntroItem}>
	      			<div className={styles.sellsIntroFont}>
	      				<p>粤享美食</p>
	      				<p>低至5折</p>
	      			</div>
	      			<div className={styles.sellsIntroImg}>
	      				<img src={food1} />
	      			</div>
	      		</div>
	      	</div>
	      </div>

	      <div className={styles.sellsLimitTime}>
	      	<div className={styles.sellsLimitTips}>
	      		限时抢购
	      	</div>
	      </div>

				<Footer />
			</div>
		)
	}
}

export default SellsView