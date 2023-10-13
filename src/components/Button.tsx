import React from 'react'
import styles from './_button.module.scss'

interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label: string;
  onClick?: () => void
}

const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'button_primary' : 'button_secondary'

  return (
    <button
      type="button"
      className={`${styles.button} ${styles['button_' + size]} ${styles[mode]}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button
