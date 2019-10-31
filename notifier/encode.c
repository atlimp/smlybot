#include <stdio.h>
#include <string.h>

int main(int argc, char **argv) {
	if (argc != 2) {
		printf("Usage: encode \"message\"\n");
	}

	char c, *in;
	int i, l;

	in = argv[1];
	l = strlen(in);

	for (i = 0; i < l; ++i) {
		c = in[i];
		printf("%02x", c);
	}

	printf("\n");

	return 1;
}
