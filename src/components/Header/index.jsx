import HeaderTop from '../HeaderTop'
import cls from './Header.module.css'

const Header = () => {
	return (
		<div className={`${cls.header} container`}>
			<HeaderTop />
		</div>
	)
}

export default Header
