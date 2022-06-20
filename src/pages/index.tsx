import React, { FormEvent } from "react";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { FormGroup } from "../components/FormGroup";
import { Input } from "../components/Input";
import { Section } from "../components/Section";
import { StaticImage } from "gatsby-plugin-image";
import { TextArea } from "../components/TextArea";
import styled from "styled-components";

const BusinessTitle = styled("span")`
	display: block;
	text-transform: uppercase;
`;

const Name = styled("span")`
	display: inline-block;
	font-family: var(--global--font-family--heading);
	font-size: var(--global--font-size--large);
	margin: 0.5em 0;
`;

const GridItem = styled("div")``;

const Grid = styled("div")`
	display: grid;
	gap: var(--global--spacing--gap);
	grid-template-columns: repeat(2, 1fr);

	@media (min-width: 1024px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

const RowContent = styled("div")`
	flex-basis: 50%;
`;

const RowImage = styled("div")`
	flex-basis: 30%;
`;

interface IRowProps {
	$reverse?: boolean;
}

const Row = styled("div")<IRowProps>`
	align-items: center;
	display: flex;
	flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
	gap: var(--global--spacing--gap);
	margin: var(--global--spacing--medium) 0;

	${RowContent} {
		text-align: ${({ $reverse }) => ($reverse ? "right" : "left")};
	}
`;

const Wrapper = styled("div")``;

class IndexPage extends React.Component {
	async handleContactSubmit(e: FormEvent): Promise<string> {
		e.preventDefault();
		const data = new FormData(e.currentTarget as HTMLFormElement);
		if (!data.has("name") || !data.has("email") || !data.has("message")) {
			throw new Error(
				`${["name", "email", "message"].find(
					(value) => !data.has(value)
				)} is missing`
			);
		}

		return `Thanks, ${data.get(
			"name"
		)}! We will reach out to you as soon as possible.`;
	}

	render(): React.ReactNode {
		return (
			<Wrapper>
				<Section align={"wide"}>
					<h2>What sets us apart</h2>

					<Row>
						<RowImage>
							<StaticImage alt={""} src={"../graphics/generic.jpg"} />
						</RowImage>

						<RowContent>
							<h3>Strong relationships.</h3>

							<p>
								Tammy has been developing and nurturing relationships in the
								legal community, both around the country and in the Puget Sound
								for almost twenty-five years, going back to her days as a
								Legislative Affairs Coordinator in Washington, D.C. upon her
								college graduation.
							</p>
						</RowContent>
					</Row>

					<Row $reverse={true}>
						<RowImage>
							<StaticImage alt={""} src={"../graphics/generic.jpg"} />
						</RowImage>

						<RowContent>
							<h3>Deep roots in the Northwest.</h3>

							<p>
								Tammy was born and raised in Portland, started her college
								career at Lewis & Clark College, and chose Seattle University
								School of Law as her law school because of it’s commitment to
								social justice. She’s a cheerleader for the Northwest and
								frequently relocates attorneys from around the country, and once
								and while, from around the globe.
							</p>
						</RowContent>
					</Row>
				</Section>

				<Section align={"wide"} background={"tertiary"}>
					<h2>White glove service</h2>

					<Row>
						<RowImage>
							<StaticImage alt={""} src={"../graphics/generic.jpg"} />
						</RowImage>

						<RowContent>
							<h3>Around-the-clock attention.</h3>

							<p>
								TLG Legal Search understands recruiting is a business that often
								requires evening, early morning and weekend meetings, and we’re
								here for you. The confidential nature of our conversations lends
								itself to discussions outside office hours; the TLG Legal team
								accommodates your schedule, not ours.
							</p>
						</RowContent>
					</Row>

					<Row $reverse={true}>
						<RowImage>
							<StaticImage alt={""} src={"../graphics/generic.jpg"} />
						</RowImage>

						<RowContent>
							<h3>Agility.</h3>

							<p>
								Our size allows us to be nimble and respond quickly, to changes
								in both our internal and external environments without losing
								momentum or vision; Whether it’s to the latest market
								conditions, a shift in search parameters, or an urgent attorney
								need.
							</p>
						</RowContent>
					</Row>
				</Section>

				<Section align={"wide"} background={"primary"}>
					<h2>Meet the team</h2>

					<Grid>
						<GridItem>
							<StaticImage alt={""} src={"../graphics/generic.jpg"} />

							<Name>Tammy Gibson</Name>
							<BusinessTitle>President</BusinessTitle>
						</GridItem>

						<GridItem>
							<StaticImage alt={""} src={"../graphics/generic.jpg"} />

							<Name>Lynn Craig</Name>
							<BusinessTitle>Director of Operations</BusinessTitle>
						</GridItem>

						<GridItem>
							<StaticImage alt={""} src={"../graphics/generic.jpg"} />

							<Name>Wendy Ungari</Name>
							<BusinessTitle>
								Marketing &amp; Social Media Manager
							</BusinessTitle>
						</GridItem>

						<GridItem>
							<StaticImage alt={""} src={"../graphics/generic.jpg"} />

							<Name>Heather Cruise</Name>
						</GridItem>
					</Grid>

					<div
						style={{
							textAlign: "center",
							paddingTop: "var(--global--spacing--small)",
						}}
					>
						<Button>Learn more</Button>
					</div>
				</Section>

				<Section id={"contact"}>
					<h2>Get in touch</h2>

					<p>
						We would love to speak with you. Please reach out to us using this
						form and we will get back to you as soon as possible.
					</p>

					<Form onSubmit={this.handleContactSubmit}>
						<FormGroup label={"Name"} labelFor={"name"}>
							<Input id={"name"} name={"name"} required={true} type={"text"} />
						</FormGroup>

						<FormGroup label={"Email"} labelFor={"email"}>
							<Input
								id={"email"}
								name={"email"}
								required={true}
								type={"email"}
							/>
						</FormGroup>

						<FormGroup label={"Message"} labelFor={"message"}>
							<TextArea id={"message"} name={"message"} required={true} />
						</FormGroup>
					</Form>
				</Section>
			</Wrapper>
		);
	}
}

export default IndexPage;
