import React, { forwardRef } from 'react'
import classNames from 'classnames/bind'
import styles from './input.module.scss'

const cx = classNames.bind(styles)

export const Input = forwardRef(
    (
        {
            type = 'text',
            label,
            name,
            id,
            placeholder,
            value,
            onChange,
            disabled = false,
            checked,
            error,
            ...props
        },
        ref
    ) => {
        return (
            <div className={cx('form-group')}>
                {label && (
                    <label htmlFor={id} className={cx('form-label', { 'label-error': error })}>
                        {label}
                    </label>
                )}
                {type === 'checkbox' || type === 'radio' ? (
                    <input
                        type={type}
                        id={id}
                        name={name}
                        checked={checked}
                        onChange={onChange}
                        disabled={disabled}
                        ref={ref}
                        className={cx('form-control', {
                            'form-control--checkbox': type === 'checkbox',
                            'form-control--radio': type === 'radio',
                            'input-error': error
                        })}
                        {...props}
                    />
                ) : (
                    <input
                        type={type}
                        id={id}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        disabled={disabled}
                        ref={ref}
                        className={cx('form-control', { 'input-error': error })}
                        {...props}
                    />
                )}
                <span className={cx('form-message')}></span>
            </div>
        )
    }
)
