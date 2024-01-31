# Create a temporary file to store the environment variables
temp_file=$(mktemp)

# Write the environment variables to the temporary file
for var in $(compgen -e); do
    if [[ $var == NEXT_PUBLIC_* ]]; then
        echo "$var=${!var}" >> $temp_file
    fi
done

next_public_env=$(cat $temp_file)
rm $temp_file

flyctl deploy . --local-only \
--build-secret next_public_env="$next_public_env" \
--config ./apps/web/fly.toml --dockerfile ./apps/web/Dockerfile
