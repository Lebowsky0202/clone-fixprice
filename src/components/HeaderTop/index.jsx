import logo from '../../assets/logo.svg'
import cls from './HeaderTop.module.css'

const HeaderTop = () => {
	return (
		<div className={cls.headerTop}>
			<button className={cls.btn}>
				<img src={logo} alt='logo' />
			</button>
			<button className={cls.catalog}>☰ Каталог </button>
		</div>
	)
}

export default HeaderTop
