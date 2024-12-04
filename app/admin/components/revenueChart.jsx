import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// Đăng ký các thành phần cần thiết
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
import React, { useEffect, useState } from 'react';

export default function RevenueChart() {
    const [chartData, setChartData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/getAllOrder`);
                const result = await response.json();
                const orders = result.data;

                // Xử lý dữ liệu: Nhóm doanh thu theo tháng
                const monthlyRevenue = orders.reduce((acc, order) => {
                    if (order.order_status == "complete" && order.payment_status == "Đã thanh toán") {
                        const month = new Date(order.created_at).getMonth() + 1; // Lấy tháng (1-12)
                        const totalAmount = parseFloat(order.total_amount); // Chuyển đổi thành số
                        acc[month] = (acc[month] || 0) + totalAmount; // Cộng tổng tiền
                    }
                    return acc;
                }, {});

                // Chuẩn bị dữ liệu biểu đồ
                const labels = Object.keys(monthlyRevenue).map((month) => `Tháng ${month}`);
                const revenues = Object.values(monthlyRevenue);

                setChartData({
                    labels,
                    datasets: [
                        {
                            label: "Doanh thu theo tháng",
                            data: revenues,
                            backgroundColor: "rgba(54, 162, 235, 0.6)",
                            borderColor: "rgba(54, 162, 235, 1)",
                            borderWidth: 1,
                        },
                    ],
                });

                setLoading(false);
            } catch (err) {
                console.error("Lỗi khi gọi API:", err);
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);



    return (
        <div>
            {loading ? (
                <p style={{ textAlign: "center" }}>Đang tải dữ liệu...</p>
            ) : (
                chartData?.datasets?.length > 0 && (
                    <Bar
                        data={chartData}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: "top",
                                },
                                title: {
                                    display: true,
                                    text: "Biểu đồ doanh thu theo tháng",
                                },
                            },
                            layout: {
                                padding: {
                                    top: 10,
                                    left: 20,
                                    right: 20,
                                    bottom: 10,
                                },
                            },
                        }}
                    />
                )
            )}
        </div>
    );

}
