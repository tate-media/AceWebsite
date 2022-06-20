type Breakpoint = "small" | "medium";

export const breakpoints = (breakpoint: Breakpoint): string => {
	switch (breakpoint) {
		case "small":
			return "(min-width: 482px)";

		case "medium":
			return "(min-width: 768px)";
	}
};
