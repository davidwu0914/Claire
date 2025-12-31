import React, { useState } from 'react';
import { submitBooking } from '../services/api';

const BookingForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');

    // Status states
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMsg('');

        try {
            await submitBooking({ name, email, date, time, message });
            setStatus('success');
            // Do not clear form immediately so user can see what they booked
        } catch (error) {
            setStatus('error');
            setErrorMsg((error as Error).message || '預約失敗，請稍後再試。');
        }
    };

    const handleGoogleCalendar = () => {
        const startTime = new Date(`${date}T${time}`).toISOString().replace(/-|:|\.\d\d\d/g, "");
        const endTime = new Date(new Date(`${date}T${time}`).getTime() + 60 * 60 * 1000).toISOString().replace(/-|:|\.\d\d\d/g, ""); // Assume 1 hour
        const details = `預約人: ${name}\n聯絡信箱: ${email}\n備註: ${message}`;
        const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Claire皮膚管理中心預約&dates=${startTime}/${endTime}&details=${encodeURIComponent(details)}&location=Claire皮膚管理中心`;
        window.open(url, '_blank');
    };

    if (status === 'success') {
        return (
            <div style={{ textAlign: 'center', padding: '40px' }}>
                <h3 style={{ color: 'green', marginBottom: '20px' }}>預約成功！</h3>
                <p>我們已收到您的預約資訊。</p>
                <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <button onClick={handleGoogleCalendar} className="btn-primary" style={{ backgroundColor: '#DB4437' }}>
                        加入 Google 行事曆
                    </button>
                    <a href="https://line.me/ti/p/@example" target="_blank" rel="noreferrer" className="btn-primary" style={{ backgroundColor: '#00C300', textDecoration: 'none', display: 'inline-block' }}>
                        加入 LINE 官方帳號獲取通知
                    </a>
                </div>
                <button onClick={() => {
                    setStatus('idle');
                    setName(''); setEmail(''); setDate(''); setTime(''); setMessage('');
                }} style={{ marginTop: '20px', background: 'transparent', color: '#666', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                    預約其他時段
                </button>
            </div>
        );
    }

    return (
        <div>
            {/* Third Party Login Mock UI */}
            <div style={{ marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                <h4 style={{ textAlign: 'center', marginBottom: '15px', fontSize: '1rem', color: '#666' }}>快速預約 & 登入</h4>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button type="button" onClick={() => alert('此功能目前為模擬展示')} style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #ddd', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '500' }}>
                        <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" style={{ width: '20px' }} />
                        Google 登入
                    </button>
                    <button type="button" onClick={() => alert('此功能目前為模擬展示')} style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #ddd', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '500' }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" alt="LINE" style={{ width: '20px' }} />
                        LINE 登入
                    </button>
                </div>
            </div>

            <form onSubmit={handleSubmit} style={{ boxShadow: 'none', padding: 0 }}>
                {status === 'error' && <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>{errorMsg}</div>}

                <div>
                    <label htmlFor="name">姓名</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        disabled={status === 'submitting'}
                        placeholder="請輸入您的姓名"
                    />
                </div>
                <div>
                    <label htmlFor="email">電子郵件</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={status === 'submitting'}
                        placeholder="example@email.com"
                    />
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                    <div style={{ flex: 1 }}>
                        <label htmlFor="date">預約日期</label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            disabled={status === 'submitting'}
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                        <label htmlFor="time">預約時間</label>
                        <input
                            type="time"
                            id="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                            disabled={status === 'submitting'}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="message">備註需求</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        disabled={status === 'submitting'}
                        placeholder="有什麼特別需要注意的嗎？"
                    />
                </div>
                <button type="submit" disabled={status === 'submitting'}>
                    {status === 'submitting' ? '提交預約中...' : '確認預約'}
                </button>
            </form>
        </div>
    );
};

export default BookingForm;