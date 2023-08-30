# Use a more recent Ubuntu base image
FROM ubuntu:20.04

# Metadata as a label (MAINTAINER is deprecated)
LABEL maintainer="Sébastien M-B <essembeh@gmail.com>"

# Set environment variables to non-interactive (this prevents some prompts)
ENV DEBIAN_FRONTEND=noninteractive

# Install locales and set locale variables
RUN apt-get update && \
    apt-get install -y locales && \
    locale-gen en_US.UTF-8

ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

# Set the locale
RUN apt-get update && \
    apt-get install -y locales && \
    locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

# Optionally, you can add your custom sources.list
# ADD sources.list /etc/apt/

# Install required packages
# Install Ruby and Gem first, then install Compass
RUN apt-get update && \
    apt-get install -y git nodejs npm ruby gem && \
    gem install compass && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Create a symbolic link for node
RUN ln -s /usr/bin/nodejs /usr/bin/node

# Configure npm and install global packages
RUN npm config set strict-ssl false && \
    npm install -g grunt-cli bower

# Clone the depthy repository and install dependencies
RUN git clone https://github.com/panrafal/depthy.git /depthy
WORKDIR /depthy
RUN npm install && \
    bower install --allow-root --config.interactive=false

# Expose port 9000 and set the entrypoint
EXPOSE 9000
ENTRYPOINT ["grunt", "serve"]
