'use client'
import classNames from 'classnames/bind'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { commentSchema } from '@/schemas'

import styles from './comment-form.module.scss'
const cx = classNames.bind(styles)

const CommentForm = ({ onAddComment }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(commentSchema),
        defaultValues: {
            content: ''
        }
    })

    const onSubmit = async (values) => {
        if (loading) return
        setLoading(true)
        setError('')
        setSuccess('')

        try {
            await onAddComment(values)
            reset()
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={cx('tab-comment')}>
            <div className={cx('text')}>Bình luận sản phẩm</div>

            <div className={cx('comment-form')}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={cx('form-group')}>
                        <textarea
                            id="content"
                            placeholder="Nhập nội dung bình luận"
                            {...register('content', { required: 'Bình luận không thể trống' })}
                        />
                        {errors.content && <p className={cx('error')}>{errors.content.message}</p>}
                    </div>

                    <div className={cx('form-group')}>
                        <Button type="submit" primary disabled={loading}>
                            {loading ? 'Đang gửi...' : 'Gửi'}
                        </Button>
                    </div>

                    {error && <div className={cx('error-message')}>{error}</div>}
                </form>
            </div>
        </div>
    )
}

export default CommentForm
