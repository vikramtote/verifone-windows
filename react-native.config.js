/**
 * @type {import('@react-native-community/cli-types').UserDependencyConfig}
 */
module.exports = {
  dependency: {
    platforms: {
      windows: {
				sourceDir: './windows',
				solutionFile: 'verifone.sln',
				projects: [
				  {
					projectFile: 'verifone/verifone.vcxproj',
					directDependency: true,
				  }
				],
			},
      android: {
        cmakeListsPath: 'generated/jni/CMakeLists.txt',
      },
    },
  },
};
