import { NavLinkRenderProps } from 'react-router-dom'
import styles from '../components/Navigation/styles.module.css'

export function checkLinkActive(props: NavLinkRenderProps): string | undefined {
	if (props.isActive) return styles.active
}
