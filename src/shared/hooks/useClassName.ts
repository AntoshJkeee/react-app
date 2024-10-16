export function useClassName(classComponent: string, className?: string) {
	if (className) {
		return [className, classComponent].join(' ');
	}
	return classComponent;
}

