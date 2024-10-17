module.exports = {
	rules: {
		'type-enum': [
			2,
			'always',
			['hotfix', 'build', 'chore', 'ci', 'docs', 'feat', 'fix', 'merge', 'perf', 'refactor', 'revert', 'style', 'test'],
		],
		'body-empty': [2, 'never'],
	},
	extends: ['@commitlint/config-conventional'],
};
