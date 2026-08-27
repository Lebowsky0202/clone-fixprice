import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'
import cls from './HeaderTop.module.css'

const HeaderTop = () => {
	return (
		<div className={cls.headerTop}>
			<button className={cls.btn}>
				<img src={logo} alt='logo' />
			</button>
			<button className={cls.catalog}>☰ Каталог </button>
			<form>
				{' '}
				<a href='#'>
					<img src={search} alt='search' />
				</a>
			</form>
		</div>
	)
}

export default HeaderTop
