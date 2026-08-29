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
			<form className={cls.search}>
				<a href='#'>
					<img src={search} alt='search' />
				</a>
				<input type='text' placeholder='Начните поиск товара' />
			</form>
			<div className={cls.auth}>
				<a href='#'>Войти</a>
				<a href='#'>Карта Fix Price</a>
			</div>
		</div>
	)
}

export default HeaderTop
