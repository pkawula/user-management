import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			darkGrey: string;
			lightGrey: string;
			lightenGrey: string;
			light: string;
			blue: string;
			orange: string;
			red: string;
			green: string;
		};
		font: {
			size: {
				s: string;
				m: string;
				l: string;
			};
		};
	}
}
