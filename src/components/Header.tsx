import { Svg, Quad, TextPath } from 'react-svg-path';
import CrescentMoonSvg from '/crescent-moon-svgrepo-com.svg'


function Header() {
	return (
		<div className="Header">
			<Svg width={1000} height={250}>
				<TextPath
					id="text"
					startOffset={50}
					path={
						<Quad
							sx={0}
							sy={100}
							cx={50}
							cy={0}
							ex={100}
							ey={100}
							t={[
								[100,20],
								[100,100],
								[170,-30],
								[200,-80],
								[100,150],
							]}
						/>
					}
				>
					The Madness of Crowded Apes: an inquiry and expirement into the art of making it
				</TextPath>
			</Svg>
			<img height="80px" src={CrescentMoonSvg}/>
		</div>
	);
}

export default Header;
