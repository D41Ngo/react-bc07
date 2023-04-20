import React, { Component } from 'react';
import './styles.css';
import XucXac from './XucXac';
import KetQua from './KetQua';

export default class GameXucXac extends Component {
	render() {
		return (
			<div className='game-xuc-xac'>
				<h1 className='pt-4 heading'>Game Đổ Xúc Xắc</h1>

				<XucXac />

				<div className='mt-4'>
					<KetQua />
				</div>
			</div>
		);
	}
}
