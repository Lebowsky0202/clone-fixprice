import HeaderTop from '../HeaderTop'
import cls from './Header.module.css'

const Header = () => {
	return (
		<div className={cls.header}>
			<div className='container'>
				<HeaderTop />
			</div>
		</div>
	)
}

export default Header
