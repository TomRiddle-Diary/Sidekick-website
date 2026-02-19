import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      inquiryType,
      name,
      email,
      company,
      message,
      consultationTopics,
      consultationMethod,
      budget,
      maintenancePlan,
      deadline,
      priority,
      expectations,
    } = body;

    // メール本文を作成
    let emailContent = `
新しいお問い合わせが届きました

━━━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ種別
━━━━━━━━━━━━━━━━━━━━━━━━
${inquiryType === 'consultation' ? '無料相談（30分程度）' : inquiryType === 'project' ? '制作依頼・お見積もり' : 'その他'}

━━━━━━━━━━━━━━━━━━━━━━━━
■ 基本情報
━━━━━━━━━━━━━━━━━━━━━━━━
お名前: ${name}
メールアドレス: ${email}
会社名・屋号: ${company || '（未記入）'}
`;

    // 無料相談の場合
    if (inquiryType === 'consultation') {
      emailContent += `
━━━━━━━━━━━━━━━━━━━━━━━━
■ 相談内容
━━━━━━━━━━━━━━━━━━━━━━━━
相談ジャンル: ${consultationTopics && consultationTopics.length > 0 ? consultationTopics.join(', ') : '（未選択）'}
希望する相談方法: ${
  consultationMethod === 'online' ? 'オンライン（Google Meet）' :
  consultationMethod === 'offline' ? 'オフライン（長崎県佐世保市）' :
  consultationMethod === 'email' ? 'メールで相談' :
  '（未選択）'
}
`;
    }

    // 制作依頼の場合
    if (inquiryType === 'project') {
      emailContent += `
━━━━━━━━━━━━━━━━━━━━━━━━
■ 制作依頼詳細
━━━━━━━━━━━━━━━━━━━━━━━━
予算感: ${
  budget === 'under-30k' ? '3万円以下' :
  budget === '30k-50k' ? '3万円〜5万円' :
  budget === '50k-100k' ? '5万円〜10万円' :
  budget === '100k-200k' ? '10万円〜20万円' :
  budget === 'over-200k' ? '20万円以上' :
  budget === 'undecided' ? '未定・相談したい' :
  '（未選択）'
}

保守・運用サポート: ${
  maintenancePlan === 'interested' ? 'はい' :
  maintenancePlan === 'not-interested' ? 'いいえ' :
  maintenancePlan === 'maybe' ? '詳しく聞いてから決めたい' :
  '（未選択）'
}

納期: ${
  deadline === 'flexible' ? '特になし・急いでない' :
  deadline === '1month' ? '1ヶ月以内' :
  deadline === '2weeks' ? '2週間以内（お急ぎ）' :
  '（未選択）'
}

Webサイトを作る目的: ${
  priority === 'branding' ? 'ブランディング（名刺代わり）' :
  priority === 'lead-generation' ? '集客・顧客獲得' :
  priority === 'information' ? '情報発信' :
  priority === 'sales' ? '商品・サービスの販売' :
  priority === 'recruitment' ? '採用・求人' :
  priority === 'other' ? 'その他' :
  '（未選択）'
}

最も期待していること: ${
  expectations === 'design' ? 'デザイン' :
  expectations === 'functionality' ? '機能性・拡張性' :
  expectations === 'speed' ? '納品までの速さ' :
  expectations === 'cost' ? 'コストパフォーマンス' :
  expectations === 'support' ? 'サポート対応' :
  '（未選択）'
}
`;
    }

    emailContent += `
━━━━━━━━━━━━━━━━━━━━━━━━
■ メッセージ
━━━━━━━━━━━━━━━━━━━━━━━━
${message}
`;

    // 自動返信メールの本文を作成
    const autoReplyContent = `
${name} 様

この度は、お問い合わせいただきありがとうございます。
以下の内容でお問い合わせを受け付けいたしました。

━━━━━━━━━━━━━━━━━━━━━━━━
■ お問い合わせ内容
━━━━━━━━━━━━━━━━━━━━━━━━
お問い合わせ種別: ${inquiryType === 'consultation' ? '無料相談（30分程度）' : inquiryType === 'project' ? '制作依頼・お見積もり' : 'その他'}

お名前: ${name}
メールアドレス: ${email}
${company ? `会社名・屋号: ${company}` : ''}

メッセージ:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━

内容を確認次第、2営業日以内にご返信させていただきます。
今しばらくお待ちください。

※このメールは自動送信されています。
※このメールに返信いただいても確認できませんので、ご了承ください。

何かご不明点がございましたら、改めてお問い合わせフォームよりご連絡ください。

今後ともよろしくお願いいたします。
`;

    // 管理者向けメールと自動返信メールを並行送信
    const [adminEmail, autoReply] = await Promise.all([
      // 管理者向けメール
      resend.emails.send({
        from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
        to: process.env.EMAIL_TO || 'your-email@example.com',
        subject: `【お問い合わせ】${name}様より - ${inquiryType === 'consultation' ? '無料相談' : inquiryType === 'project' ? '制作依頼' : 'その他'}`,
        text: emailContent,
      }),
      // 自動返信メール
      resend.emails.send({
        from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
        to: email,
        subject: `【自動返信】お問い合わせありがとうございます`,
        text: autoReplyContent,
      }),
    ]);

    return NextResponse.json(
      { message: 'メールが正常に送信されました', data: { adminEmail, autoReply } },
      { status: 200 }
    );
  } catch (error) {
    console.error('メール送信エラー:', error);
    return NextResponse.json(
      { message: 'メール送信に失敗しました', error },
      { status: 500 }
    );
  }
}
