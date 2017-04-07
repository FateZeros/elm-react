import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'

import Footer from 'src/components/footer'

import styles from './MinesView.scss'
import demoImg from 'src/asserts/demo.jpeg'

class MinesView extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	static PropTypes = {
		match: PropTypes.object
	}

	formatPhone = phone => {
		if (typeof phone === 'number') {
        phone = phone.toString()
   	}
    // return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
    return phone.substr(0, 3) + '****' + phone.substr(7, 11)
	}

	render() {
		const { url } = this.props.match

		return (
			<div className={styles.root}>
				<div className={styles.toolbars}>
					<div className={styles.ring}>
						<Link to={{ pathname: `${url}/ring`}}>
							<p className={styles.ringNum}>99+</p>
						</Link>
					</div>
					<div className={styles.mine}>我的</div>
					<div className={styles.setting}></div>
				</div>

				<Link to={{ pathname: `${url}/info` }}>
					<div className={styles.minesInfo}>
						<div className={styles.myImg}>
							<img src={demoImg} alt="myImg" />
						</div>
						<div className={styles.myBrief}>
							<div className={styles.myName}>秋月无边</div>
							<div className={styles.myPhone}>
								<div className={styles.myPhoneImg}></div>
								<div className={styles.phoneNum}>{this.formatPhone(1872819812)}</div>
							</div>
						</div>
						<div className={styles.rightArrowWhite}></div>
					</div>
				</Link>

				<div className={styles.minesBrief}>
					<div className={styles.myMoney}>
						<p><span>0.00</span>元</p>
						<p>余额</p>
					</div>
					<div className={styles.myPrivilege}>
						<p><span>4</span>个</p>
						<p>优惠</p>
					</div>
					<div className={styles.myIntegral}>
						<p><span>276</span>分</p>
						<p>积分</p>
					</div>
				</div>

				<div className={styles.addrCont}>
					<Link to={{ pathname: `${url}/addr` }}>
						<div className={styles.myAddr}>
							<div className={styles.myAddrImg}>
							</div>
							<div className={styles.myAddrInfo}>
								收货地址
							</div>
							<div className={styles.rightArrowGrey}></div>
						</div>
					</Link>
					<div className={styles.myCollect}>
						<div className={styles.myCollectImg}>
						</div>
						<div className={styles.myAddrInfo}>
							我的收藏
						</div>
						<div className={styles.rightArrowGrey}></div>
					</div>
				</div>

				<div className={styles.shopCont}>
					<div className={styles.myRecommend}>
						<div className={styles.myRecommendImg}>
						</div>
						<div className={styles.myRecommendInfo}>
							<div className={styles.myRecommendTip}>推荐有奖</div>
							<div className={styles.myRecommendBrief}>5元现金</div>
						</div>
						<div className={styles.rightArrowGrey}></div>
					</div>
					<div className={styles.myShop}>
						<div className={styles.myShopImg}>
						</div>
						<div className={styles.myRecommendInfo}>
							<div className={styles.myRecommendTip}>积分商城</div>
							<div className={styles.myRecommendBrief}>0元好物在这里</div>
						</div>
						<div className={styles.rightArrowGrey}></div>
					</div>
					<div className={styles.myMember}>
						<div className={styles.myMemberImg}>
						</div>
						<div className={styles.myAddrInfo}>
							饿了么会员卡
						</div>
						<div className={styles.rightArrowGrey}></div>
					</div>
				</div>

				<div className={styles.serviceCont}>
					<div className={styles.myService}>
						<div className={styles.myServiceImg}>
						</div>
						<div className={styles.myAddrInfo}>
							服务中心
						</div>
						<div className={styles.rightArrowGrey}></div>
					</div>
					<div className={styles.myGrade}>
						<div className={styles.myGradeImg}>
						</div>
						<div className={styles.myAddrInfo}>
							欢迎评分
						</div>
						<div className={styles.rightArrowGrey}></div>
					</div>
					<div className={styles.myJoin}>
						<div className={styles.myJoinImg}>
						</div>
						<div className={styles.myAddrInfo}>
							加盟合作
						</div>
						<div className={styles.rightArrowGrey}></div>
					</div>
				</div>

				<Footer />
			</div>
		)
	}
}

export default MinesView