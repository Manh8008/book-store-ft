'use client'
import React from 'react'
import classNames from 'classnames/bind'
import styles from './pagination.module.scss'

const cx = classNames.bind(styles)

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const renderPageNumbers = () => {
        const pages = []
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    className={cx('pagination-button', { active: currentPage === i })}
                    onClick={() => onPageChange(i)}
                >
                    {i}
                </button>
            )
        }
        return pages
    }

    return (
        <div className={cx('pagination-container')}>
            <button
                className={cx('pagination-button')}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &lt;
            </button>
            {renderPageNumbers()}
            <button
                className={cx('pagination-button')}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                &gt;
            </button>
        </div>
    )
}

export default Pagination
