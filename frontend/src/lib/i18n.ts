import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: {
					'Chat Header': "Describe the UI you'd like to generate.",
					'Pro Tip': 'Pro Tip: You can drag or paste a reference screenshot.'
				}
			},
			ja: {
				translation: {
					'Chat Header': '生成したい UI について説明してください。',
					'Pro Tip':
						'ヒント: 参照したいスクリーンショットをドラッグ&ドロップできます。'
				}
			},
			kr: {
				translation: {
					'Chat Header': '생성하고 싶은 UI에 대해 설명해주세요.',
					'Pro Tip':
						'프로 팁: 참조 스크린샷을 드래그 또는 붙여넣기할 수 있습니다.'
				}
			}
		},
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false
		}
	})
	// eslint-disable-next-line unicorn/prefer-top-level-await
	.then(
		() => {
			const userLang = navigator.language
			console.log('I18n initialized', userLang)
		},
		(error: unknown) => {
			console.error('I18n error', error)
		}
	)
