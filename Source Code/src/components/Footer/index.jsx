import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			 Written by यश कुशवाहा 
			<small className={Styles.byline}></small>
		</footer>
	);
}
export default Footer;
