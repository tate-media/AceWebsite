import React, { FormEvent } from "react";
import { Button } from "./Button";
import PropTypes from "prop-types";
import styled from "styled-components";

interface IPanelProps {
	$visible: boolean;
}

const Panel = styled("div")<IPanelProps>`
	align-items: center;
	background-color: #fafafa;
	border: 1px solid #eee;
	border-radius: 4px;
	box-sizing: border-box;
	display: flex;
	height: 100%;
	justify-content: center;
	left: 0;
	opacity: ${({ $visible }) => ($visible ? "1" : "0")};
	padding: 2em 6em;
	position: absolute;
	text-align: center;
	top: 0;
	transition: opacity 0.3s, visibility 0.3s;
	visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
	width: 100%;
`;

const Wrapper = styled("form")`
	position: relative;
`;

interface IFormPropsBase {
	children: React.ReactNode;
}

interface IFormPropsWithAction extends IFormPropsBase {
	action: string;
	method: "get" | "put";
	onSubmit?: never;
}

interface IFormPropsWithOnSubmit extends IFormPropsBase {
	action?: never;
	method?: never;
	onSubmit: (e: FormEvent) => Promise<void | string>;
}

type IFormProps = IFormPropsWithAction | IFormPropsWithOnSubmit;

interface IFormState {
	status?: "failure" | "success";
	successMessage?: string;
}

class Form extends React.Component<IFormProps, IFormState> {
	static propTypes = {
		children: PropTypes.node,
	};

	constructor(props: IFormProps) {
		super(props);
		this.state = {};
	}

	render(): React.ReactNode {
		const { children, onSubmit, ...rest } = this.props;
		const { successMessage, status } = this.state;

		let props = {};
		if (onSubmit) {
			props = {
				...props,
				onSubmit: async (e: FormEvent): Promise<void> => {
					e.preventDefault();
					try {
						const message = await onSubmit(e);
						if (typeof message === "string") {
							this.setState({ status: "success", successMessage: message });
						} else {
							this.setState({ status: "success" });
						}
					} catch (err) {
						console.error(err);
						this.setState({ status: "failure" });
					}
				},
			};
		} else {
			props = rest;
		}

		return (
			<Wrapper {...props}>
				{children}

				<Button type={"submit"}>Submit</Button>

				<Panel $visible={status === "success"}>
					<p>
						{successMessage
							? successMessage
							: "Thanks for sending the message!"}
					</p>
				</Panel>

				<Panel $visible={status === "failure"}>
					<p>
						Oops, an error occurred. Please refresh this page and try again, or
						reach out to us directly via email at{" "}
						<a href={"mailto:tammy@tlglegalsearch.com"}>
							tammy@tlglegalsearch.com
						</a>
						.
					</p>
				</Panel>
			</Wrapper>
		);
	}
}

export { Form };
