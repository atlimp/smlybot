#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char **argv) {
	
	if (argc != 2) {
		printf("Usage: decode [hex encoded string]\n");
		exit(1);
	}

	int l, i;
	long c;
	char *in, *hex;

	in = argv[1];
	l = strlen(in);
	for (i = 0; i < l; i += 2) {
		hex = malloc(2*sizeof(char) + 1);
		hex[0] = in[i];
		hex[1] = in[i + 1];
		hex[2] = '\0';

		c = strtol(hex, NULL, 16);
		printf("%c", c);

		free(hex);
	}
	printf("\n");

	return 0;
}
