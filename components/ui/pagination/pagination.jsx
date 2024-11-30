'use client'
import React from 'react'
import classNames from 'classnames/bind'
import styles from './pagination.module.scss'

const cx = classNames.bind(styles)

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const renderPageNumbers = () => {
        const pages = []
        const maxPagesToShow = 5
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2))
        let endPage = Math.min(totalPages, currentPage + Math.floor(maxPagesToShow / 2))

        if (endPage - startPage < maxPagesToShow - 1) {
            if (startPage === 1) {
                endPage = Math.min(totalPages, startPage + maxPagesToShow - 1)
            } else {
                startPage = Math.max(1, endPage - maxPagesToShow + 1)
            }
        }

        if (startPage > 1) {
            pages.push(
                <button
                    key="prev-ellipsis"
                    className={cx('pagination-button', 'ellipsis')}
                    disabled
                >
                    ...
                </button>
            )
        }

        for (let i = startPage; i <= endPage; i++) {
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

        if (endPage < totalPages) {
            pages.push(
                <button
                    key="next-ellipsis"
                    className={cx('pagination-button', 'ellipsis')}
                    disabled
                >
                    ...
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
