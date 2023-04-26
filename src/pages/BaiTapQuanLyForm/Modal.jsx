import React, { Component } from 'react';

export default class Modal extends Component {
	render() {
		return (
			<div
				class='modal'
				style={{
					display: 'block',
				}}>
				<div class='modal-dialog'>
					<div class='modal-content'>
						<div class='modal-header'>
							<h5 class='modal-title'>Modal title</h5>
							<button
								type='button'
								class='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
								onClick={this.props.handleCloseModal}></button>
						</div>
						<div class='modal-body'>
							<p>{this.props.message}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
